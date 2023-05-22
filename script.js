// Encryption function

function encryptFile() {

  // Get the file input element

  const fileInput = document.getElementById('fileInput');

  // Get the file object

  const file = fileInput.files[0];

  // Create a new FileReader object

  const reader = new FileReader();

  // Read the file contents as text

  reader.readAsText(file);

  // When the file is read, call the onload function

  reader.onload = function() {

    // Get the message text

    const message = reader.result;

    // Encrypt the message using the Caesar cipher

    const encryptedMessage = caesarCipherEncrypt(message, 3);

    // Create a download link for the encrypted file

    const downloadLink = document.getElementById('downloadLink');

    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedMessage));

    downloadLink.setAttribute('download', file.name + '.encrypted');

    downloadLink.style.display = 'block';

  };

}

// Decryption function

function decryptFile() {

  // Get the encoded file input element

  const encodedFileInput = document.getElementById('encodedFileInput');

  // Get the encoded file object

  const encodedFile = encodedFileInput.files[0];

  // Create a new FileReader object

  const reader = new FileReader();

  // Read the file contents as text

  reader.readAsText(encodedFile);

  // When the file is read, call the onload function

  reader.onload = function() {

    // Get the encoded message text

    const encodedMessage = reader.result;

    // Decrypt the message using the Caesar cipher

    const decryptedMessage = caesarCipherDecrypt(encodedMessage, 3);

    // Display the decrypted message

    const output = document.getElementById('output');

    output.innerText = decryptedMessage;

  };

}

// Caesar Cipher encryption function

function caesarCipherEncrypt(message, shift) {

  // Create an empty string to store the encrypted message

  let encryptedMessage = '';

  // Loop through each character in the message

  for (let i = 0; i < message.length; i++) {

    // Get the character code of the current character

    let charCode = message.charCodeAt(i);

    // If the character is a letter

    if (charCode >= 65 && charCode <= 90) {

      // Uppercase letters

      charCode = ((charCode - 65 + shift) % 26) + 65;

    } else if (charCode >= 97 && charCode <= 122) {

      // Lowercase letters

      charCode = ((charCode - 97 + shift) % 26) + 97;

    }

    // Append the encrypted character to the encrypted message string

    encryptedMessage += String.fromCharCode(charCode);

  }

  // Return the encrypted message string

  return encryptedMessage;

}

// Caesar Cipher decryption function

function caesarCipherDecrypt(encryptedMessage, shift) {

  // Return the encrypted message encrypted with the Caesar cipher with a shift of 26 - shift

  return caesarCipherEncrypt(encryptedMessage, 26 - shift);

}
