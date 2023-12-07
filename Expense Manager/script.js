/**Form**/

function toggleForm(){
    const floatingForm = document.getElementById('floatingForm')
    const blurBackground = document.querySelector('.blur-background')

    if (floatingForm.style.display === 'none'|| floatingForm.style.display === '') {
        floatingForm.style.display = 'block'
        blurBackground.style.display = 'block'
    } else {
        floatingForm.style.display = 'none'
        toggleFormButton.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
        blurBackground.style.display = 'none'
    }
}

const toggleFormButton = document.getElementById('toggleFormButton')

toggleFormButton.addEventListener('click', toggleForm)

/**Profile**/

function toggleProfile(){
    const floatingProfile = document.getElementById('floatingProfile')
    const blurBackground = document.querySelector('.blur-background')

    if (floatingProfile.style.display === 'none'|| floatingProfile.style.display === '') {
        floatingProfile.style.display = 'block'
        blurBackground.style.display = 'block'
    } else {
        floatingProfile.style.display = 'none'
        toggleProfileButton.innerHTML = '<i class="fa-regular fa-user"></i>'
        blurBackground.style.display = 'none'
    }
}

const toggleProfileButton = document.getElementById('toggleProfileButton')

toggleProfileButton.addEventListener('click', toggleProfile)

/** Close Button For Profile **/
const closeButton = document.getElementById('closeButton')
let blurBackground = document.querySelector('.blur-background')

if (closeButton){
    closeButton.addEventListener('click', () =>{
        floatingProfile.style.display = 'none'
        blurBackground.style.display = 'none'
    })
}

/** Close Button For Form **/
const closingButton = document.getElementById('closingButton')
let blurryBackground = document.querySelector('.blur-background')

if (closingButton){
    closingButton.addEventListener('click', (event) =>{
        event.preventDefault();
        
        floatingForm.style.display = 'none'
        blurryBackground.style.display = 'none'
    })
}

/**Adding Expenses **/

let button = document.getElementById('button')
let DATE = document.getElementById('dateInput')
let MERCHANT = document.getElementById('merchantInput')
let TYPE = document.getElementById('type')
let AMOUNT =  document.getElementById('amountInput')
let DESCRIPTION = document.getElementById('descriptionInput')
let STATE = document.getElementById('state')
let FREQUENCY = document.getElementById('frequency')
let table = document.getElementById('table')
let expense_records = [];//array for local storage

if(localStorage.getItem('expense_records')){
    expense_records = JSON.parse(localStorage.getItem('expense_records'))
    renderTable()
}

let inputs = [DATE, MERCHANT, AMOUNT, DESCRIPTION]//ARRAY FOR INPUTS

function add_expense(date = 'N/A', merchant = 'N/A', type = 'N/A', amount = 'N/A', description = 'N/A', state = 'N/A', frequency = 'N/A' ){ 
//default parameters

let DATE_OBJECT = new Date(DATE.value)
let FORMATTED_DATE = DATE_OBJECT.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})

date = FORMATTED_DATE
merchant = MERCHANT.value
type = TYPE.value
amount = AMOUNT.value
description = DESCRIPTION.value
state = STATE.value
frequency = FREQUENCY.value

expense_records.push({date, merchant, type, amount, description, state, frequency})//add expense to array

updateLocalStorage()

renderTable();
}

//to delete an entry
function delete_expense(index){
    expense_records.splice(index,1)
    updateLocalStorage()

    renderTable()
}

function renderTable(){
    table.innerHTML = `<tr>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Decription</th>
                        <th>State</th>
                        <th>Frequency</th>
                        <th>Action</th>

                    </tr>`

    expense_records.forEach((expense,index)=>{
        table.innerHTML +=`<tr>
                            <td>${expense.date}</td>
                            <td>${expense.merchant}</td>
                            <td>${expense.type}</td>
                            <td>${expense.amount}</td>
                            <td>${expense.description}</td>
                            <td>${expense.state}</td>
                            <td>${expense.frequency}</td>
                            <td><button onclick = "delete_expense(${index})">Delete</button></td>
                        </tr>`
    })

}

function updateLocalStorage(){
    localStorage.setItem('expense_records', JSON.stringify(expense_records));
}

button.addEventListener('click', add_expense)

/**
<!-- Add input fields for filtering -->
<input type="text" id="dateFilter" placeholder="Filter by Date">
<input type="text" id="merchantFilter" placeholder="Filter by Merchant">
<!-- Add similar input fields for other columns -->

<!-- Your existing table -->
<table id="table">
    <!-- table headers and rows -->
</table>

<script>
    // Get reference to the input fields
    const dateFilter = document.getElementById('dateFilter');
    const merchantFilter = document.getElementById('merchantFilter');
    // Add references for other input fields similarly

    // Add event listeners to input fields
    dateFilter.addEventListener('input', filterTable);
    merchantFilter.addEventListener('input', filterTable);
    // Add event listeners for other input fields similarly

    function filterTable() {
        const filterValueDate = dateFilter.value.toUpperCase();
        const filterValueMerchant = merchantFilter.value.toUpperCase();
        // Get values from other input fields similarly

        const table = document.getElementById('table');
        const rows = table.getElementsByTagName('tr');

        // Loop through all table rows, hide those that don't match the filter
        for (let i = 1; i < rows.length; i++) {
            const dateCol = rows[i].getElementsByTagName('td')[0];
            const merchantCol = rows[i].getElementsByTagName('td')[1];
            // Get values from other columns similarly
        
            if (dateCol && merchantCol // && other columns //) {
                const txtValueDate = dateCol.textContent || dateCol.innerText;
                const txtValueMerchant = merchantCol.textContent || merchantCol.innerText;
                // Get text values from other columns similarly

                // Show/hide rows based on filter conditions
                rows[i].style.display = (
                    txtValueDate.toUpperCase().indexOf(filterValueDate) > -1 &&
                    txtValueMerchant.toUpperCase().indexOf(filterValueMerchant) > -1
                    // Add conditions for other columns similarly
                ) ? '' : 'none';
            }
        }
    }
</script>        
**/
