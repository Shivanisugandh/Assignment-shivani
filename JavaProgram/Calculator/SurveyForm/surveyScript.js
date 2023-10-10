document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const firstTime = document.querySelector('input[name="first-time"]:checked');
        const recommend = document.querySelector('input[name="recommend"]:checked');
        const satisfaction = document.getElementById("satisfaction").value;
        const suggestions = document.getElementById("suggestions").value;

        // Perform any desired actions with the form data here
        // For now, we'll just display the data in an alert
        const surveyData = {
            Name: name,
            Email: email,
            "First Time User": firstTime ? firstTime.value : "Not selected",
            "Recommendation": recommend ? recommend.value : "Not selected",
            "Satisfaction": satisfaction,
            "Suggestions": suggestions
        };
        
        // Display the collected data in an alert (you can customize this)
        alert("Survey Data:\n\n" + JSON.stringify(surveyData, null, 2));

        // Reset the form after submission
        form.reset();
    });
});
