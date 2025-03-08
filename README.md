<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .calculator {
            width: 250px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
        input {
            width: 100%;
            height: 40px;
            font-size: 20px;
            text-align: right;
            margin-bottom: 10px;
        }
        button {
            width: 23%;
            height: 40px;
            margin: 5px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h2>Simple Calculator</h2>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <br>
        <button onclick="clearDisplay()">C</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('+')">+</button>
        <br>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('-')">-</button>
        <br>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('*')">*</button>
        <br>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="calculateResult()">=</button>
        <button onclick="appendToDisplay('/')">/</button>
    </div>
    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
        function calculateResult() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>
</html>

