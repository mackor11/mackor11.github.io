<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Maksymalnego EXP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .calculator {
            width: 300px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
        input, button {
            width: 90%;
            height: 40px;
            margin: 5px;
            font-size: 18px;
        }
        button {
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
    <h2>Kalkulator Maksymalnego EXP</h2>
    <div class="calculator">
        <label for="sessions">Ilość sesji:</label>
        <input type="number" id="sessions" min="1" value="1">
        
        <label for="levels">Poziomy postaci (oddzielone przecinkami):</label>
        <input type="text" id="levels" placeholder="np. 3,4,7">
        
        <button onclick="calculateEXP()">Oblicz EXP</button>
        
        <h3>Wynik:</h3>
        <p id="result">---</p>
    </div>
    
    <script>
        function calculateEXP() {
            let sessions = document.getElementById("sessions").value;
            let levels = document.getElementById("levels").value.split(',').map(Number);
            
            if (sessions < 1 || levels.length === 0 || levels.includes(NaN)) {
                document.getElementById("result").innerText = "Wprowadź poprawne dane!";
                return;
            }
            
            let sumLevels = levels.reduce((a, b) => a + b, 0);
            let avgLevel = sumLevels / levels.length;
            let exp = (2351.936228 * sessions) / avgLevel;
            
            document.getElementById("result").innerText = `EXP dla graczy: ${exp.toFixed(2)}`;
        }
    </script>
</body>
</html>
