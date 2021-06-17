# test-repo

Some text

#heading
Main content of this repo is ....

#Sub-heading
Secondary content

Use git Bash
#Clone
>>./folderName> git clone httpsCode
>>cd repoName
>>ls -la __ show hidden files


#Commit and Add
git status => shows status of files (committed, untracked, etc) Untracked needs to be tracked (via add) before committing
>> git add .
>> git commit -m "message" -m "message2"


#SSH 
>>ssh-keygen -t rsa -b 4096 -C "sashinramdhani@gmail.com" -f ~/.ssh/keyName
             {type} {strength}  {email}                   {set path and newname}
Search for key:
>>ls | grep newName
newName
newName.pub

Dsiplay public key
>>cat testkey.pub
On github goto settings/ssh and gpg keys/new SSH Key

Need to make sure the local GIT CLI knows about the new key
>> eval "$(ssh-agent -s)"
Start the ssh-agent in the background
Then add ssh private key to the ssh-agent
>> $ ~/.ssh/testkey
<< Identity added at /c/Users/sashin.ramdhani/.ssh/newkey


# PUSH
git push origin main


#Starting a repo locally
git init


