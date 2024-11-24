const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.port || 3000;

const addTwoNumbers = (n1, n2) => n1 + n2;
const subtractTwoNumbers = (n1, n2) => n1 - n2;
const multiplyTwoNumbers = (n1, n2) => n1 * n2;
const divideTwoNumbers = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return n1 / n2;
};

app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({ statusCode: 200, data: result });
});


app.get("/calculate", (req, res) => {
    const { n1, n2, operation } = req.query;

    try {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        let result;
        switch (operation) {
            case "add":
                result = addTwoNumbers(num1, num2);
                break;
            case "subtract":
                result = subtractTwoNumbers(num1, num2);
                break;
            case "multiply":
                result = multiplyTwoNumbers(num1, num2);
                break;
            case "divide":
                result = divideTwoNumbers(num1, num2);
                break;
            default:
                return res.status(400).json({
                    statusCode: 400,
                    message: "Invalid operation. Use add, subtract, multiply, or divide.",
                });
        }

        res.json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
    }
});


app.listen(port, () => {
    console.log("App listening on port: " + port);
});
