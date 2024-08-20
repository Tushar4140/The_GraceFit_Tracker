How to Run Locally
Prerequisites: you'll need to have Git, Node, and NPM installed and running on your machine.
Open terminal/powershell/command prompt/
Install dependencies
npm install
npm install -g npm-run-all
npm install -g concurrently


Steps to Run GraceFit tracker 
Install dependencies
npm install
Once the installation is done, you can run the app locally
go to this start the project this directory Example :- PS D:\THE GYM GRACE TRACKER\
npm run start-dev
Then open http://localhost:8080 to see your app.


Steps to run Personalize Workout Generator 
Run npm install to install all the dependencies
Create a .env.local from env-example file: cp env-example .env.local
Update the OpenAI key and Google PaLM API key in the .env.local file
go to this start the project this directory Example :- PS D:\THE GYM GRACE TRACKER\Personalize Workout Generator>
type in this in terminall Run npm run dev


Once the installation is done, you can run the app locally
write this command in your Vs code terminal
npm run start-both
npm run start-dev
npm run dev


Note:- You should open the Directory or  any folder of Gym Grace Tracker run this command npm run start-dev 
to new terminal 




Install Node.js:
Make sure you have Node.js installed on your system. You can download it from the official website: Node.js Downloads.

Verify Installation:
After installing Node.js, open a new command prompt or PowerShell window and type the following commands to check if Node.js and npm are installed:

Copy code
node -v
npm -v

These commands should print the installed versions of Node.js and npm. If not, there might be an issue with the installation.
Update System PATH:
Ensure that the directory containing the npm executable is included in your system's PATH environment variable. The npm executable is usually located in the same directory as Node.js.

Restart PowerShell:
After making changes to the system PATH, close and reopen the PowerShell window to apply the changes.

If you still encounter issues, please check the installation paths and ensure that Node.js and npm are installed correctly. If the problem persists, feel free to provide additional information for further assistance.