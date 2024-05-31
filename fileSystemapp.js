const fs = require('node:fs');
const readline = require('node:readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function DisplayMenu() {
    console.log(`\n__________(File System Application)__________`);
    rl.question('Create a new file Enter (1):\nCreate a new Folder Enter (2)\nChange File/Folder Name Enter (3):\nDelete File Enter (4):\nDelete Folder Enter (5): \n\nEnter a choice.............', function(choice) {
        AppOption(parseInt(choice));
    });
};

function AppOption(choice) {
    switch (choice) {
        case 1:
            {
                CreateFile();
                break;
            };
        case 2:
            {
                CreateFolder();
                break;
            };
        case 3:
            {
                ChangeFileFolderName();
                break;
            };
        case 4:
            {
                DeleteFile();
                break;
            };
        case 5:
            {
                DeleteFolder();
                break;
            };
        default:
            {
                console.log("invalid Choice!!!\n");
                DisplayMenu();
                break;
            };
    };
};
//------------------
function CreateFile() {
    rl.question('Enter a File Name: ', function(fileName) {
        rl.question('Enter a Description: ', function(fileDis) {
            fs.writeFile(fileName, fileDis, function(err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`\nFile Created (${fileName}) Successfully!!`);
                };
                rl.question('Do you Want to Leave (yes/no): ', function(tellme) {
                    if (tellme == 'yes') {
                        rl.close();
                    } else {
                        DisplayMenu();
                    };
                });
            });
        });
    });
};
//--------------------
function CreateFolder() {
    rl.question('Enter a Folder Name: ', function(FolderName) {
        fs.mkdir(FolderName, function(err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`\nFolder Created (${FolderName}) Successfully.`);
            };
            rl.question('Do you Want to Leave (yes/no): ', function(tellme) {
                if (tellme == 'yes') {
                    rl.close();
                } else {
                    DisplayMenu();
                };
            });
        });

    });
};
//-------------------
function ChangeFileFolderName() {
    rl.question('Enter the file/folder name you want to change: ', function(oldName) {
        rl.question('Enter new Name: ', function(newName) {
            fs.rename(oldName, newName, function(err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`\nName changed (${newName}) Successfullly:`);
                }
                rl.question('Do you Want to Leave (yes/no): ', function(tellme) {
                    if (tellme == 'yes') {
                        rl.close();
                    } else {
                        DisplayMenu();
                    };
                });
            });
        });
    });
};
//-----------------
function DeleteFile() {
    rl.question('Enter a file Name you want to Delete: ', function(RemoveFile) {
        fs.unlink(RemoveFile, function(err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`\nFile Delete (${RemoveFile}) Successfully:`);
            };
            rl.question('Do You Want to Leave (yes/no): ', function(tellme) {
                if (tellme == 'yes') {
                    rl.close();
                } else {
                    DisplayMenu();
                }
            })
        });
    });
};
//-----------------
function DeleteFolder() {
    rl.question('Enter a folder Name you Want to Delete: ', function(RemoveFolder) {
        fs.rmdir(RemoveFolder, function(err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`\nFolder Delete (${RemoveFolder}) Successfully:`);
            };
            rl.question('Do You Want to Leave (yes/no): ', function(tellme) {
                if (tellme == 'yes') {
                    rl.close();
                } else {
                    DisplayMenu();
                };
            });
        });
    });
};
DisplayMenu();