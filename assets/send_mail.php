<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve and sanitize form data
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);
    $subject = sanitizeInput($_POST["subject"]);
    $message = sanitizeInput($_POST["message"]);

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Prepare email message for admin
    $toAdmin = "elfeenah413@gmail.com"; // Update this to your desired email address
    $headersAdmin = "From: $email";
    $email_message_admin = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send email to admin
    if (mail($toAdmin, "New Contact Form Submission", $email_message_admin, $headersAdmin)) {
        // Prepare email message for user acknowledgment
        $toUser = $email;
        $headersUser = "From: elfeenah413@gmail.com"; // Update this to your email address
        $acknowledgment_message = "Hello $name,\n\nThank you for contacting Nafisa Lawal Idris! We have received your message and will get back to you as soon as possible.\n\nBest regards,\nNafisa Lawal Idris"; // Custom acknowledgment message with the portfolio name

        // Send acknowledgment email to user
        mail($toUser, "Thank you for your message", $acknowledgment_message, $headersUser);

        echo "Your message has been sent successfully! You will receive a confirmation email shortly.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "Invalid request.";
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
