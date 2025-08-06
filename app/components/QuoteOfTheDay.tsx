/*
   Author: Veer Agrawal (veer1@bu.edu)
   Description: Display a random Quote of the Day through a API call
   Styling: Done here with styled-componentn
 */

"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRandomQuote } from "@/lib/quotes";

//Styling

//box card for quote
const Card = styled.section`
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  margin: 20px 0;

  &:hover {
    transform: translateY(-1vh);
  }
`;


//quote text styling
const QuoteText = styled.blockquote`
  font-family: "Playfair Display", serif;      
  font-style: italic;
  font-size: calc(1.2vw + 1.2vh);
  color: black;     

  //cool red shadow on txt - makes it stand out
  text-shadow: 1px 1px 2px rgba(242, 69, 69, 0.3);
  margin: 0 0 1vh;                           

  // bckgrnd on quote (seprte from card )
  padding: 1vh 2vw;
  background: #fffefbff;
  border-left: 0.5vw solid #e5cc3aff;

  // Fancy quotes on both sides
  quotes: "“" "”";
  &::before {
    content: open-quote;
    font-size: 1.5em;
    color: #fcc419;
  }
  &::after {
    content: close-quote;
    font-size: 1.5em;
    color: #fcc419;
  }
`;

//authour text styling
const Author = styled.p`
  font-size: calc(0.9vw + 0.9vh);
  font-family: "Playfair Display", serif;
  text-align: right;
  font-weight: 600; 
  color: #2c3e50;  
  text-shadow: 0.2vh 0.2vh 0.5vh rgba(255, 231, 47, 0.6); 
`;

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState<{ q: string; a: string } | null>(null);

  useEffect(() => {
    // call server once when the component mounts
    (async () => {
      const q = await getRandomQuote();
      setQuote(q);
    })();
  }, []);

  // Theres a limit on no. of api calls in a short amnt of time
  // If call fails then (if user refreshes many times quickly) :

  if (!quote) return "Loading- Wait before refreshing";

  return (
    <Card>
      <QuoteText id="quote">{quote.q}</QuoteText>
      <Author id="author">— {quote.a}</Author>
    </Card>
  );
}
