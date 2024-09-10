import React, { useState } from "react";
import styled from "styled-components";
import Statistics from "./Statistics";

function UrlShortener() {
  const [urlInput, setUrlInput] = useState("");
  const [shortUrl, setShortUrl] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (urlInput.length < 5) {
      document.getElementById("inputField").classList.add("error");
      setError(true);
      document.getElementById("errorMsg").style.display = "block";
    } else {
      if (document.getElementById("inputField").classList.contains("error")) {
        document.getElementById("inputField").classList.remove("error");
        document.getElementById("errorMsg").style.display = "none";
      }
      setError(false);

      const existsArray = shortUrl.filter((info) =>
        info.original_link.includes(urlInput)
      );

      if (existsArray.length === 0) {
        const fetchData = async () => {
          let response = await fetch(
            `https://ulvis.net/API/write/get?url=${urlInput}&type=json`
          );
          let urlData = await response.json();
          let url = await urlData;
          let data = {
            original_link: url.data.full,
            short_link: url.data.url,
          };
          setShortUrl((shortUrl) => [data, ...shortUrl]);
          setUrlInput("");
        };
        fetchData();
      }

      document.getElementById("inputField").value = "";
    }
  };

  const handleOnChange = () => {
    let value = document.getElementById("inputField").value;
    if (value.length > 0) {
      document.getElementById("errorMsg").style.display = "none";
      document.getElementById("inputField").classList.remove("error");
    }
  };

  const handleCopy = (event) => {
    let element = document.getElementById(event.target.id);
    let index = event.target.id.slice(7);
    console.log(index);
    let urlCopied = shortUrl[index].short_link;
    navigator.clipboard.writeText(urlCopied);

    element.innerText = "Copied!";
    element.style.backgroundColor = "#3b3054";
    setTimeout(() => {
      element.innerText = "Copy";
      element.style.backgroundColor = "#2acfcf";
    }, 750);
  };

  return (
    <PageWrapper>
      <Container>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            onChange={(e) => {
              setUrlInput(e.target.value);
              handleOnChange();
            }}
            type="url"
            placeholder="Shorten a link here..."
            id="inputField"
            error={error}
          />
          <span className="errorMsg" id="errorMsg">
            Please add a link
          </span>

          <button type="submit">
            Shorten It!
          </button>
        </form>
      </Container>
      {shortUrl.map((info, index) => {
        return (
          <article className="urlCard" key={index}>
            <span className="original-link">{info.original_link}</span>
            <hr />
            <div className="urlWrapper">
              <span className="short-link">{info.short_link}</span>
              <button
                type="button"
                className="urlCard-btn"
                id={`urlCard${index}`}
                onClick={(event) => handleCopy(event)}
              >
                Copy
              </button>
            </div>
          </article>
        );
      })}
    </PageWrapper>
  );
}

export default UrlShortener;

const PageWrapper = styled.main`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    background-color: #eff1f7;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -5;
  }
`;

const Container = styled.div`
  margin-top: 138px;
  width: 72%;
  background: url("/images/bg-shorten-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 136px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #3b3054;
    z-index: -1;
  }

  form {
    padding: 15px 15px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  form input.error {
    border: 3px solid #f46262;
    ::placeholder {
      color: #f46262;
    }
  }

  form input {
    width: 72%;
    padding: 15px 20px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: white;
    font-family: inherit;
    font-size: 16px;
  }

  form button {
    padding: 15px 20px;
    margin-left: 15px;
    border-radius: 8px;
    outline: none;
    border: none;
    font-family: inherit;
    font-weight: 700;
    color: white;
    background-color: #2acfcf;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      background-color: #9be3e2;
    }
  }

  @media only screen and (max-width: 960px) {
    background: url("/images/bg-shorten-mobile.svg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    padding: 8px 8px;
    height: auto;
    margin-top: 60px;
    form {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
      }

      button {
        width: 100%;
        margin-top: 15px;
        margin-left: 0;
      }
    }
  }
`;
