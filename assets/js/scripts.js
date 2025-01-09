const translations = {
    en: {
        profileName: "Grzegorz Juzwiszyn",
        addToContacts: "+ Add to contacts",
        phoneLabel: "Phone number",
        altPhoneLabel: "Alternative phone number",
        emailLabel: "Email",
        companyLabel: "Company",
        companyName: "JUCOM IT Security"
    },
    pl: {
        profileName: "Grzegorz Juzwiszyn",
        addToContacts: "+ Dodaj do kontaktów",
        phoneLabel: "Numer telefonu",
        altPhoneLabel: "Alternatywny numer telefonu",
        emailLabel: "Email",
        companyLabel: "Firma",
        companyName: "JUCOM IT Bezpieczeństwo"
    },
    ge: {
        profileName: "Grzegorz Juzwiszyn",
        addToContacts: "+ Kontakte hinzufügen",
        phoneLabel: "Telefonnummer",
        altPhoneLabel: "Alternative Telefonnummer",
        emailLabel: "E-Mail",
        companyLabel: "Unternehmen",
        companyName: "JUCOM IT Sicherheit"
    },
    fr: {
        profileName: "Grzegorz Juzwiszyn",
        addToContacts: "+ Ajouter aux contacts",
        phoneLabel: "Numéro de téléphone",
        altPhoneLabel: "Numéro de téléphone alternatif",
        emailLabel: "E-mail",
        companyLabel: "Entreprise",
        companyName: "JUCOM Sécurité Informatique"
    }
};
function toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function changeLanguage(lang) {
    const translation = translations[lang];
    document.getElementById('profile-name').innerText = translation.profileName;
    document.getElementById('add-to-contacts').innerText = translation.addToContacts;
    document.getElementById('phone-label').innerText = translation.phoneLabel;
    document.getElementById('alt-phone-label').innerText = translation.altPhoneLabel;
    document.getElementById('email-label').innerText = translation.emailLabel;
    document.getElementById('company-label').innerText = translation.companyLabel;
    document.getElementById('company-name').innerText = translation.companyName;
    
    const selectedLanguage = document.querySelector(".selected-language img");
    const currentLanguage = document.getElementById("current-language");
    const languageMap = {
        pl: "assets/images/pl.png",
        en: "assets/images/en.png",
        ge: "assets/images/ge.png",
        fr: "assets/images/fr.png"
    };

    // Update the current language image
    if (languageMap[lang]) {
        selectedLanguage.src = languageMap[lang];
        selectedLanguage.alt = lang.toUpperCase();
    }

    // Hide the dropdown after selection
    toggleDropdown();
}

function showSection(sectionId) {
    document.querySelectorAll('.info-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById("tab-"+sectionId).classList.add('active');
  

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('language-dropdown');
    const selector = document.querySelector('.language-selector');
    if (!selector.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});}

document.getElementById("add-to-contacts").addEventListener("click", function () {
    // Path to the VCF file
    const vcfFilePath = "assets/Grzegorz.vcf";

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = vcfFilePath;
    a.download = "my_contact.vcf"; // Set the default file name for the download
    document.body.appendChild(a);

    // Trigger the download
    a.click();

    // Clean up the temporary anchor element
    document.body.removeChild(a);
});