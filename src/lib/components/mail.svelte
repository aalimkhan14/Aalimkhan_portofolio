<script lang="ts">
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    async function sendEmail() {
        const serviceId = 'service_k1e4pkd';
        const templateId = 'template_9ei1bin';
        const publicKey = 'QpoQ6AEjayFPehYMQ';

        try {
            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        user_name: name,
                        user_email: email,
                        subject: subject,
                        message: message
                    }
                })
            });

            const data = await response.text();
            console.log("STATUS:", response.status);
            console.log("RESPONSE:", data);

            if (response.ok) {
                alert("Email sent successfully ");

                name = '';
                email = '';
                subject = '';
                message = '';
            } else {
                alert("Failed to send email ");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong ");
        }
    }
</script>

<form on:submit|preventDefault={sendEmail}>
    <h2 class="head">Leave a Message</h2>

    <div class="identify">
        <label>
            Name
            <input type="text" bind:value={name} />
        </label>

        <label>
            Email
            <input type="text" bind:value={email} />
        </label>
    </div>

    <label>
        Subject
        <input type="text" bind:value={subject} />
    </label>

    <label>
        Message
        <textarea bind:value={message}></textarea>
    </label>

    <input type="submit" value="Send Message" />
</form>
<style>
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 40px;
        gap: 20px;
        background-color: var(--background);
        border-radius: 12px;
    }
    .head{
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 4px;
        color: var(--text);
    }
    label{
        display: flex;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--text);
        gap: 8px;
    }
    .identify{
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
    .identify label{
        width: 50%;
    }
    input[type="text"]{
        padding: 12px 16px;
        outline: none;
        border: none;
        background-color: var(--surface);
        border-radius: 8px;
        color: var(--text);
    }
    textarea{
        height: 232px;
        border: none;
        outline: none;
        background-color: var(--surface);
        color: var(--text);
        border-radius: 8px;
        resize: none;
        padding: 10px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
    }
    input[type='submit']{
        padding: 12px 20px;
        background-color: var(--primary);
        border: none;
        outline: none;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #131313;
        width: fit-content;
        margin-top: 4px;
    }
</style>