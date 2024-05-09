import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuotationDetailsModel from "../modals/QuotationDetailsModel";

function QuotaList() {
  const [quotelist, setQuoteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quoteId, setQuoteId] = useState("");
  const [generatedHtml, setGeneratedHtml] = useState("");
  const [customerName, setCustomerName] = useState(""); // Set initial values
  const [quotationNumber, setQuotationNumber] = useState("");

  const fetchData = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network is down, Try again later");
        }
        console.log("data:  ", response);
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        throw error;
      });
  };

  const handleGeneratePdf = async (quoteId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/template/${quoteId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Quotation.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        // Extract customerName and quotationNumber from the response body
        const responseBody = await response.json();
        const { customerName, quotationNumber } = responseBody;

        // Update state with customerName and quotationNumber
        setCustomerName(customerName);
        setQuotationNumber(quotationNumber);

        // Display the information (you can customize this part)
        console.log(
          `Customer Name: ${customerName}, Quotation Number: ${quotationNumber}`
        );
      } else {
        console.error("Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error during PDF generation:", error);
    }
  };

  const deleteUser = (userId) => {
    fetch(`http://localhost:8080/api/v1/${userId}`, {
      // Use backticks (`) here
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  useEffect(() => {
    const fetchDataAndHandleError = () => {
      fetchData()
        .then((data) => setQuoteList(data))
        .catch((error) => console.error("Error setting employ data:", error))
        .finally(() => setLoading(false));
    };
    fetchDataAndHandleError();

    const intervalId = setInterval(fetchDataAndHandleError, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quotation Number</th>
              <th>Expiration Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {quotelist.map((quoteList) => (
              <tr key={quoteList.quoteId}>
                <td>{quoteList.customer_name}</td>
                <td>QU{quoteList.quotationNumber}</td>
                <td>{quoteList.expirationDate}</td>
                <td>{quoteList.status}</td>
                <td>
                  <QuotationDetailsModel />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {generatedHtml && (
        <div>
          <h2>Generated HTML:</h2>
          <div dangerouslySetInnerHTML={{ __html: generatedHtml }} />
        </div>
      )}
    </div>
  );
}
export default QuotaList;
