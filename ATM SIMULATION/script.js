let balance = 1000; // Hidden balance
let pinCode = "1234"; // Sample pin
let transactionType = '';

function validatePin() {
  const enteredPin = document.getElementById('pin').value;
  const message = document.getElementById('message');

  if (enteredPin === pinCode) {
    message.textContent = "PIN correct! Choose your option.";
    document.querySelector('.atm-options').style.display = 'block';
    document.querySelector('.atm-screen').style.display = 'none';
  } else {
    message.textContent = "Incorrect PIN. Try again.";
  }
}

function checkBalance() {
  alert(`Your balance is hidden. Enter a transaction to reveal it.`);
}

function withdraw() {
  transactionType = 'withdraw';
  showTransactionScreen();
}

function deposit() {
  transactionType = 'deposit';
  showTransactionScreen();
}

function showTransactionScreen() {
  document.querySelector('.atm-options').style.display = 'none';
  document.querySelector('.atm-actions').style.display = 'block';
}

function confirmTransaction() {
  const amount = parseInt(document.getElementById('amount').value);

  if (transactionType === 'withdraw') {
    if (amount <= balance) {
      balance -= amount;
      alert(`Transaction successful! Your new balance is $${balance}`);
    } else {
      alert('Insufficient balance!');
    }
  } else if (transactionType === 'deposit') {
    balance += amount;
    alert(`Transaction successful! Your new balance is $${balance}`);
  }

  resetATM();
}

function resetATM() {
  document.querySelector('.atm-actions').style.display = 'none';
  document.querySelector('.atm-options').style.display = 'block';
  document.getElementById('amount').value = '';
}

function exit() {
  alert('Thank you for using the ATM!');
  window.location.reload();
}
