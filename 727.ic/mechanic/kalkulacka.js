<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Servis Vozidel</title>
    <style>
      body {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
      }

      .tables-container {
        width: 75%; /* Tables container takes 75% of the width */
      }

      .summary-container {
        width: 20%; /* Fixed width for the summary */
        height: 20%; /* Let it adjust based on content */
        text-align: center;
        border: 2px solid #e04747;
        padding: 20px;
        border-radius: 10px;
        background-color: #f9f9f9;
        position: sticky;
        top: 20px; /* Sticky for better visual if scrolled */
      }

      .summary-container h3 {
        margin-bottom: 20px;
        color: #e04747;
      }

      .summary-container p {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .summary-container button {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        font-size: 1rem;
        color: white;
        background-color: #e04747;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      .summary-container button:hover {
        background-color: #d03535;
      }

      table {
        width: 100%;
        margin-bottom: 20px;
        border-radius: 10px;
        border-collapse: collapse;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      th,
      td {
        padding: 12px;
        text-align: left;
        border: 1px solid #ddd;
        font-size: 1rem;
      }

      th {
        background-color: #f2f2f2;
        font-size: 1.1rem;
      }

      td {
        font-size: 1rem;
      }

      input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        border-radius: 2px;
        margin-right: 10px;
        cursor: pointer;
      }
      input[type="checkbox"]:checked {
        background-color: #e04747;
        border-color: #e04747;
      }

      .group-header {
        text-align: center;
        background-color: #e04747;
        color: white;
        padding: 10px;
        font-size: 1.2rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .checkbox-column {
        width: 10%;
        text-align: center;
      }

      .service-col,
      .price-col,
      .checkbox-col {
        width: 33%;
      }

      .checkbox-col {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="tables-container">
      <!-- Základní servisní služba table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Základní servisní služba</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Oprava vozidla</td>
            <td class="price-col">10 000 Kč + Cena za díly</td>
            <td class="checkbox-col">
              <input
                data-label="Oprava vozidla"
                type="checkbox"
                value="10000"
                onclick="calculateTotal()"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Výměna kola</td>
            <td class="price-col">2 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="aaaaa"
                type="checkbox"
                value="2000"
                onclick="calculateTotal()"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Přebarvení vozidla</td>
            <td class="price-col">15 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="aaaaa"
                type="checkbox"
                value="15000"
                onclick="calculateTotal()"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Výměna světel</td>
            <td class="price-col">10 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="aaaaa"
                type="checkbox"
                value="10000"
                onclick="calculateTotal()"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Karoserie table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Karoserie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální karoserie</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální karoserie"
                type="checkbox"
                value="30000"
                data-group="karoserie"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Odlehčená karoserie</td>
            <td class="price-col">100 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Odlehčená karoserie"
                type="checkbox"
                data-group="karoserie"
                value="100000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zpevněná karoserie</td>
            <td class="price-col">160 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zpevněná karoserie"
                type="checkbox"
                data-group="karoserie"
                value="160000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Typ kol table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Typ kol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální kola</td>
            <td class="price-col">35 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální kola"
                type="checkbox"
                value="35000"
                data-group="typkol"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zenden</td>
            <td class="price-col">44 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zenden"
                type="checkbox"
                data-group="typkol"
                value="44000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Shadow</td>
            <td class="price-col">42 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Shadow"
                type="checkbox"
                data-group="typkol"
                value="42000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Mega</td>
            <td class="price-col">58 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Mega"
                type="checkbox"
                data-group="typkol"
                value="58000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Ronal Turbo</td>
            <td class="price-col">72 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Ronal Turbo"
                type="checkbox"
                data-group="typkol"
                value="72000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Wires</td>
            <td class="price-col">69 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Wires"
                type="checkbox"
                data-group="typkol"
                value="69000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Hamann Edition Race</td>
            <td class="price-col">65 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Hamann Edition Race"
                type="checkbox"
                data-group="typkol"
                value="65000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Seikel</td>
            <td class="price-col">38 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Seikel"
                type="checkbox"
                data-group="typkol"
                value="38000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Cutter</td>
            <td class="price-col">57 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Cutter"
                type="checkbox"
                data-group="typkol"
                value="57000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Advan Racing</td>
            <td class="price-col">48 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Advan Racing"
                type="checkbox"
                data-group="typkol"
                value="48000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Vette</td>
            <td class="price-col">68 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Vette"
                type="checkbox"
                data-group="typkol"
                value="68000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Rays Volk Racing</td>
            <td class="price-col">61 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Rays Volk Racing"
                type="checkbox"
                data-group="typkol"
                value="61000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">DUB Big Chips</td>
            <td class="price-col">80 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="DUB Big Chips"
                type="checkbox"
                data-group="typkol"
                value="80000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Borbet</td>
            <td class="price-col">73 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Borbet"
                type="checkbox"
                data-group="typkol"
                value="73000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">BBS</td>
            <td class="price-col">76 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="BBS"
                type="checkbox"
                data-group="typkol"
                value="76000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Fifteen52</td>
            <td class="price-col">55 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Fifteen52"
                type="checkbox"
                data-group="typkol"
                value="55000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">AMG1</td>
            <td class="price-col">100 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="AMG1"
                type="checkbox"
                data-group="typkol"
                value="100000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">BFGoodrich</td>
            <td class="price-col">43 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="BFGoodrich"
                type="checkbox"
                data-group="typkol"
                value="43000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Šířka předních/zadních pneu table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">
              Šířka předních/zadních pneu
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální pneu</td>
            <td class="price-col">22 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální pneu"
                type="checkbox"
                value="22000"
                data-group="sirkakol"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Velmi úzká pneu</td>
            <td class="price-col">22 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Velmi úzká pneu"
                type="checkbox"
                data-group="sirkakol"
                value="22000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Úzká pneu</td>
            <td class="price-col">24 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Úzká pneu"
                type="checkbox"
                data-group="sirkakol"
                value="24000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Běžná pneu</td>
            <td class="price-col">28 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Běžná pneu"
                type="checkbox"
                data-group="sirkakol"
                value="28000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Široká pneu</td>
            <td class="price-col">37 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Široká pneu"
                type="checkbox"
                data-group="sirkakol"
                value="37000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Velmi široká pneu</td>
            <td class="price-col">52 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Velmi široká pneu"
                type="checkbox"
                data-group="sirkakol"
                value="52000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Řídící jednotka table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Řídící jednotka</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Tovární nastavení</td>
            <td class="price-col">15 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Tovární nastavení"
                type="checkbox"
                value="15000"
                data-group="ridicijednotka"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Úprava ECU - výkon</td>
            <td class="price-col">50 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Úprava ECU - výkon"
                type="checkbox"
                data-group="ridicijednotka"
                value="50000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Úprava ECU - spotřeba</td>
            <td class="price-col">25 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Úprava ECU - spotřeba"
                type="checkbox"
                data-group="ridicijednotka"
                value="25000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Omezovač table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Omezovač</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Tovární nastavení</td>
            <td class="price-col">15 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Tovární nastavení"
                type="checkbox"
                value="15000"
                data-group="omezovac"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Žádný omezovač</td>
            <td class="price-col">45 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Žádný omezovač"
                type="checkbox"
                data-group="omezovac"
                value="45000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Omezovač na 70 km/h</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Omezovač na 70 km/h"
                type="checkbox"
                data-group="omezovac"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Omezovač na 90 km/h</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Omezovač na 90 km/h"
                type="checkbox"
                data-group="omezovac"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Omezovač na 120 km/h</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Omezovač na 120 km/h"
                type="checkbox"
                data-group="omezovac"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Omezovač na 180 km/h</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Omezovač na 180 km/h"
                type="checkbox"
                data-group="omezovac"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Omezovač na 250 km/h</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Omezovač na 250 km/h"
                type="checkbox"
                data-group="omezovac"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Motor table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Motor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální motor</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální motor"
                type="checkbox"
                data-group="motor"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zlepšený rozvod paliva</td>
            <td class="price-col">70 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zlepšený rozvod paliva"
                type="checkbox"
                data-group="motor"
                value="70000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Motor s kompresorem</td>
            <td class="price-col">150 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Motor s kompresorem"
                type="checkbox"
                data-group="motor"
                value="150000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Motor s turbem</td>
            <td class="price-col">200 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Motor s turbem"
                type="checkbox"
                data-group="motor"
                value="200000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Motor s twin-turbem</td>
            <td class="price-col">420 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Motor s twin-turbem"
                type="checkbox"
                data-group="motor"
                value="420000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Zámek otáčení table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Zámek otáčení</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Standardní zámek otáčení</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Standardní zámek otáčení"
                type="checkbox"
                data-group="zamekotaceni"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Snížený zámek otáčení -4</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Snížený zámek otáčení -4"
                type="checkbox"
                data-group="zamekotaceni"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Snížený zámek otáčení -8</td>
            <td class="price-col">70 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Snížený zámek otáčení -8"
                type="checkbox"
                data-group="zamekotaceni"
                value="70000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zvýšený zámek otáčení +4</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zvýšený zámek otáčení +4"
                type="checkbox"
                data-group="zamekotaceni"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zvýšený zámek otáčení +8</td>
            <td class="price-col">70 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zvýšený zámek otáčení +8"
                type="checkbox"
                data-group="zamekotaceni"
                value="70000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Spoiler table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Spoiler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Žádný spoiler</td>
            <td class="price-col">15 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Žádný spoiler"
                type="checkbox"
                value="15000"
                data-group="spoiler"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Všechny druhy spolierů</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Všechny druhy spolierů"
                type="checkbox"
                data-group="spoiler"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Brzdy table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Brzdy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální brzdy</td>
            <td class="price-col">20 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální brzdy"
                type="checkbox"
                data-group="brzdy"
                value="20000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Silnější brzdy</td>
            <td class="price-col">90 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Silnější brzdy"
                type="checkbox"
                data-group="brzdy"
                value="90000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Seřízení pro drift</td>
            <td class="price-col">70 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Seřízení pro drift"
                type="checkbox"
                data-group="brzdy"
                value="70000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zesílení předních brzd T1</td>
            <td class="price-col">150 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zesílení předních brzd T1"
                type="checkbox"
                data-group="brzdy"
                value="150000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zesílení předních brzd T2</td>
            <td class="price-col">300 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zesílení předních brzd T2"
                type="checkbox"
                data-group="brzdy"
                value="300000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zesílení zadních brzd T1</td>
            <td class="price-col">150 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zesílení zadních brzd T1"
                type="checkbox"
                data-group="brzdy"
                value="150000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zesílení zadních brzd T2</td>
            <td class="price-col">300 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zesílení zadních brzd T2"
                type="checkbox"
                data-group="brzdy"
                value="300000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Diferenciál table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Diferenciál</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální diferenciál</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální diferenciál"
                type="checkbox"
                value="40000"
                data-group="diferencial"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zavařený diferenciál</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zavařený diferenciál"
                type="checkbox"
                data-group="diferencial"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Samosvorný diferenciál 1-WAY</td>
            <td class="price-col">80 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Samosvorný diferenciál 1-WAY"
                type="checkbox"
                data-group="diferencial"
                value="80000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Samosvorný diferenciál 1.5-WAY</td>
            <td class="price-col">80 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Samosvorný diferenciál 1.5-WAY"
                type="checkbox"
                data-group="diferencial"
                value="80000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Samosvorný diferenciál 2-WAY</td>
            <td class="price-col">80 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Samosvorný diferenciál 2-WAY"
                type="checkbox"
                data-group="diferencial"
                value="80000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Geometrie table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Geometrie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Tovární nastavení</td>
            <td class="price-col">10 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Tovární nastavení"
                type="checkbox"
                value="10000"
                data-group="geometrie"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Seřízení geometrie T1</td>
            <td class="price-col">20 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Seřízení geometrie T1"
                type="checkbox"
                data-group="geometrie"
                value="20000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Seřízení geometrie T2</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Seřízení geometrie T2"
                type="checkbox"
                data-group="geometrie"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Rozložení hmotnosti table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Rozložení hmotnosti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Originální těžiště</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Originální těžiště"
                type="checkbox"
                data-group="rozlozenihmotnosti"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Odlehčená přední část</td>
            <td class="price-col">50 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Odlehčená přední část"
                type="checkbox"
                data-group="rozlozenihmotnosti"
                value="50000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zatížená zadní část</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zatížená zadní část"
                type="checkbox"
                data-group="rozlozenihmotnosti"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Odlehčená zadní část</td>
            <td class="price-col">50 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Odlehčená zadní část"
                type="checkbox"
                data-group="rozlozenihmotnosti"
                value="50000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Zatížená přední část</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Zatížená přední část"
                type="checkbox"
                data-group="rozlozenihmotnosti"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pásy table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Pásy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Běžné tříbodové pásy</td>
            <td class="price-col">20 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Běžné tříbodové pásy"
                type="checkbox"
                data-group="pasy"
                value="20000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Sportovní čtyřbodové pásy</td>
            <td class="price-col">40 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Sportovní čtyřbodové pásy"
                type="checkbox"
                data-group="pasy"
                value="40000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Závodní šestibodové pásy</td>
            <td class="price-col">60 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Závodní šestibodové pásy"
                type="checkbox"
                data-group="pasy"
                value="60000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Ochranné prvky table -->
      <table>
        <thead>
          <tr>
            <th colspan="3" class="group-header">Ochranné prvky</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-col">Žádné ochranné prvky</td>
            <td class="price-col">30 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Žádné ochranné prvky"
                type="checkbox"
                data-group="ochranneprvky"
                value="30000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Základní bezp. polo-rám (ocel)</td>
            <td class="price-col">70 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Základní bezp. polo-rám (ocel)"
                type="checkbox"
                data-group="ochranneprvky"
                value="70000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Základní bezp. rám (ocel)</td>
            <td class="price-col">120 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Základní bezp. rám (ocel)"
                type="checkbox"
                data-group="ochranneprvky"
                value="120000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Bezp. polo-rám (chrom-molybden)</td>
            <td class="price-col">200 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Bezp. polo-rám (chrom-molybden)"
                type="checkbox"
                data-group="ochranneprvky"
                value="200000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Bezp. rám (ocel)</td>
            <td class="price-col">250 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Bezp. rám (ocel)"
                type="checkbox"
                data-group="ochranneprvky"
                value="250000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Bezp. rám (chrom-molybden)</td>
            <td class="price-col">500 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Bezp. rám (chrom-molybden)"
                type="checkbox"
                data-group="ochranneprvky"
                value="500000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
          <tr>
            <td class="service-col">Závodní bezp. rám (chrom-molybden)</td>
            <td class="price-col">900 000 Kč</td>
            <td class="checkbox-col">
              <input
                data-label="Závodní bezp. rám (chrom-molybden)"
                type="checkbox"
                data-group="ochranneprvky"
                value="900000"
                onclick="handleCheckbox(this)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-container">
      <h3>Celková cena</h3>
      <p id="total">0 Kč</p>
      <button onclick="showSelectedItems()">Zaznamenat</button>
      <button onclick="alert('Objednávka byla zrušena!')">
        Zrušit objednávku
      </button>
      <button onclick="resetSelections()">Resetovat</button>
    </div>

    <script>
      function handleCheckbox(selectedCheckbox) {
        const group = selectedCheckbox.dataset.group;
        const checkboxes = document.querySelectorAll(`[data-group="${group}"]`);

        if (selectedCheckbox.checked) {
          checkboxes.forEach((cb) => {
            if (cb !== selectedCheckbox) {
              cb.checked = false;
            }
          });
        }

        calculateTotal();
      }
      function calculateTotal() {
        const items = document.querySelectorAll('input[type="checkbox"]');
        let total = 0;

        items.forEach((item) => {
          if (item.checked) {
            total += parseInt(item.value, 10);
          }
        });

        // Format total with spaces and append "Kč" and extra text if applicable
        document.getElementById("total").textContent = `${total.toLocaleString(
          "cs-CZ"
        )} Kč`;
      }

      function resetSelections() {
        const items = document.querySelectorAll('input[type="checkbox"]');
        items.forEach((item) => (item.checked = false));
        calculateTotal(); // Reset total
      }

      function showSelectedItems() {
        const items = document.querySelectorAll('input[type="checkbox"]');
        let selectedItems = [];

        // Loop through checkboxes and collect selected items
        items.forEach((item) => {
          if (item.checked) {
            selectedItems.push(item.dataset.label);
          }
        });

        // If no items are selected, show a message
        if (selectedItems.length === 0) {
          alert("Žádné položky nejsou vybrány.");
        } else {
          // Join the selected items in a string and display them
          alert("Vybrané položky: " + selectedItems.join(", "));
        }
      }
    </script>
  </body>
</html>
