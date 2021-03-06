import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Calculator from "../components/calculator";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Demystifying computation`, `FutureLearn`, `binary`, `explanation`, `denary`]} />
    <h2>A FutureLearn assignment by Matt Bee</h2>
    <p>Binary is a way of representing numbers using only 1 and 0.  It uses a base 2 system, which means that each part of the number has 2 possible values, 0 and 1.</p>

    <p>As you may have learned in school, we generally represent numbers in a Base 10 system (known as the Denary system)</p>

    <p>An example of Denary is where each part of a number represents the next step up in a Base 10 system. So from right to left you have 1s, 10s, 100s, 1000s and so on.</p>
    <p>For example the dernary number 2031 has 2 '1000s', no hundreds, 3 tens and 1 one.</p>

    <p>Binary is similar but counts up whether you include that column in the final result. The dernary value can be calculated by adding up all columns that have a value of 1.</p>

    <h4>Binary 'column' values</h4>

    <p>To convert binary to dernary, we can assign columns a dernary value. Each column is double the previous column value, from right to left. So in binary, the ‘columns' represent 1, 2, 4, 8, 16, 32, 64, 128 and so on.</p>

    <p>The number 38 in decimal is represented as 8 ones and 3 tens (from right to left remember).</p>

    <p>The same number in binary is 100110 - 1 x 32, 0 x 16, 0 x 8, 1 x 4, 1 x 2 and 0 x 1 => 32 + 4 + 2 = 38</p>

    <p>You can use this tool to work out what dernary system numbers a binary number represents and visualise how Binary numbers work.</p>

    <Calculator />
  </Layout>
)

export default IndexPage;
