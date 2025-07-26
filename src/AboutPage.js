export default function AboutPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const AboutDiv = document.createElement('div');
  AboutDiv.className = 'About-page';

  const headline = document.createElement('h2');
  headline.textContent = 'About This Weather App';
  AboutDiv.appendChild(headline);


  const description = document.createElement('p');
  description.textContent = `Weather APP is a modern web application designed to provide you with real-time weather updates for any city. The app displays current weather conditions, temperature, humidity, cloud information, wind speed, and other essential climate data in a user-friendly dashboard. In addition to detailed weather for your selected city, you can also view a summary of weather information for other common cities. With its intuitive interface and comprehensive weather insights, staying updated with the weather has never been easier!`;
  AboutDiv.appendChild(description);

  const contactHeadline = document.createElement('h3');
  contactHeadline.textContent = 'Contact Details';
  AboutDiv.appendChild(contactHeadline);

  const email = document.createElement('p');
  email.textContent = 'Email: support@weatherapp.com';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: +91-XXXXXXXXXX';

  const developer = document.createElement('p');
  developer.textContent = 'Developer: John Doe';

  AboutDiv.appendChild(email);
  AboutDiv.appendChild(phone);
  AboutDiv.appendChild(developer);


  const appreciation = document.createElement('p');
  appreciation.textContent = 'We appreciate your suggestions to help us make Weather APP better!';
  AboutDiv.appendChild(appreciation);

  content.appendChild(AboutDiv);
}
