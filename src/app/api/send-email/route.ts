import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, event, time, date} = await req.json();
  console.log(event);

  // Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prathampshetty99sai@gmail.com',
      pass: 'dlwofqozvkvwmwyi',
    },
  });

  // Configure email options
  const mailOptions = {
    from: 'prathampshetty99sai@gmail.com',
    to: '22ai048@gmail.com',
    subject: `🎉Event was booked for ${event} make it Confirmed! 🎟️`,
    html: `
      <!DOCTYPE html>
      <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Event Booking Confirmation</title>
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: white; /* Set background color to white */
              color: #161616;
            }
            .container {
              width: 100%;
              max-width: 600px; /* Adjusted max-width for the container */
              margin: 0 auto;
              padding: 20px; /* Added padding around the container */
            }
            .card {
              background-color: #1e1e1e;
              border-radius: 0px;
              padding: 20px;
              margin-bottom: 20px; /* Added margin between cards */
            }
            .image-card {
              max-width: 100%; /* Image card takes full width of container */
              border-radius: 12px;
              margin-bottom: 20px; /* Added margin below image */
            }
            .image-card img {
              width: 100%;
              border-radius: 12px;
            }
            .text-content {
              flex: 1;
            }
            .text-content h1 {
              text-align: center;
              color: #FFFFFF;
              font-size: 2em;
              margin-bottom: 20px;
            }
            .text-content p {
              max-width: 100%;
              line-height: 1.5;
              font-size: 1.2em;
              color: #FFFFFF;
              text-align: left;
            }
            .text-content p span {
              display: block;
              text-align: left;
              margin-top: 20px;
            }
            .card:last-child {
              margin-bottom: 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- First Card -->
            <div class="card ax-center text-white mb-10">
              <div class="image-card">
                <img src="/email.jpeg" alt="Event Image">
              </div>
            </div>
            
            <!-- Second Card -->
            <div class="card ax-center text-white mb-10">
              <div class="text-content">
               <h1>🎉 ${event}</h1>
<p>
  Contact ${firstName} ${lastName} to confirm this slot.<br><br>
  Thank you for booking your slot for the event <strong>${event}</strong>! We are excited to have you join us. 🎟️<br><br>
  Event Details:<br>
  - Event: <strong>${event}</strong><br>
  - Date: <strong>${date}</strong><br>
  - Time: <strong>${time}</strong><br><br>
  Please contact ${firstName} ${lastName}  phone ${phone} email${email} to confirm this slot.<br><br>
  Best regards,<br>
  Information sent to admin.
</p>

                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  };
  
  

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      { status: 500 }
    );
  }
}
