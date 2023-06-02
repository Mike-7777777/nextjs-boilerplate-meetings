'use client';

export default function MyForm() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch('/api/posts', { method: form.method, body: formData });
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <label for="name">
            Your name: <input type="text" id="first" name="name" />
            </label>
            <label>
            Time Slot: 
            <input type="checkbox" name="slot_1_8" /> 8-12
            <input type="checkbox" name="slot_1_12" /> 12-14
            <input type="checkbox" name="slot_1_14" /> 14-16
            <input type="checkbox" name="slot_1_16" /> 16-18
            <input type="checkbox" name="slot_1_18" /> 18-20
            <input type="checkbox" name="slot_1_20" /> 20-22
            <input type="checkbox" name="slot_1_22" /> 22-24
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}