import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'
const KEY = 'mails';

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
    addEmail,
    readEmail,
    unReadEmail,
    // toggleIsRead,
    countUnread
}

const loadStorage = storageService.loadFromStorage(KEY);
var gEmails = loadStorage ? loadStorage : [ {
    id: '1',
    sender: 'Roey',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: new Date().toLocaleDateString()
},
{
    id: '2',
    sender: 'Panda',
    subject: 'yoooooooooooooooooooooooooooooooo?',
    body: 'Pick upedsgzeeeeeeeeeee!',
    isRead: true,
    sentAt: new Date().toLocaleDateString()
},
{
    id: '3',
    sender: 'Elon Musk',
    subject: 'why you ghosting?',
    body: 'Pick up!',
    isRead: false,
    sentAt: new Date().toLocaleDateString()
}
];

function query() {
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    const email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email);
}

//is this a function I couldve just placed in preview component and not here?
function readEmail(emailId) {
    emailId.isRead = true;
    storageService.saveToStorage(KEY, gEmails);
}
function unReadEmail(emailId) {
    emailId.isRead = false;
    storageService.saveToStorage(KEY, gEmails);
}

// function toggleIsRead(emailId) {
//     if (emailId.isRead) !emailId.isRead;
//     else if (!emailId.isRead) emailId.isRead;
//     storageService.saveToStorage(KEY, gEmails);
// }

function deleteEmail(emailId) {
    const emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    });
    gEmails.splice(emailIdx, 1);
    storageService.saveToStorage(KEY, gEmails);
    return Promise.resolve(); // is this still needed?
}

function _composeMail(recipient, subject, body) {
    let today = new Date().toLocaleDateString()
    const newMail = {
        id: utilService.makeId(),
        recipient,
        subject,
        body,
        isRead: false,
        sentAt: today,
    }
    return newMail;
}

function addEmail(recipient, subject, body) {
    let newMail = _composeMail(recipient, subject, body);
    gEmails.push(newMail);
    storageService.saveToStorage(KEY, gEmails);
}

function countUnread() {
    let unreadCount = 0;
    gEmails.forEach(mail => {
        if (!mail.isRead) unreadCount++;
    })
    return unreadCount;
}
