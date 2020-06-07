## Running the app locally

Tutorial for this app:

### Add environment variables
Add a `.env` file with [these](https://gist.github.com/sweetyclem/4382f0fab211f36d2a3a82039353eb1b) variables

### Tunnel local ports
` ./ngrok http 5000`

The events listen on `/events`
The interactions listen on `/interactions`
The command listen on `/commands`

### Add the Ngrok URL to Slack settings


### Run the app
`npm run start`
