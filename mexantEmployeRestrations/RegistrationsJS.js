  document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("userForm");
            const tableContainer = document.querySelector(".FormDivide");

            const table = document.createElement("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
            tableContainer.appendChild(table);

            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const fname = document.getElementById("fname").value;
                const lname = document.getElementById("lname").value;
                const age = document.getElementById("age").value;
                const gender = document.querySelector('input[name="gender"]:checked')?.value || '';

                const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
                    .map(h => h.value).join(", ");

                const country = document.getElementById("country").value;

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${fname}</td>
                    <td>${lname}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td>${hobbies}</td>
                    <td>${country}</td>
                    <td><button class="delete-btn">Delete</button></td>
                `;

                table.querySelector("tbody").appendChild(row);
                form.reset();
                alert("Employe Registered Successfully!");
            });

            table.addEventListener("click", function (e) {
                if (e.target.classList.contains("delete-btn")) {
                    e.target.closest("tr").remove();
                     alert("Employe Details Deleted Successfully!");
                }
            });
        });