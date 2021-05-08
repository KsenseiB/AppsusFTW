import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'
const KEY = 'mails';

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
    addEmail,
    countUnread
}

const loadStorage = storageService.loadFromStorage(KEY);
var gEmails = loadStorage ? loadStorage : [{
        id: '1',
        sender: 'Roey',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: '2',
        sender: 'Panda',
        subject: 'yo?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: '3',
        sender: 'Elon Musk',
        subject: 'why you ghosting?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    }
];

function query() {
    return Promise.resolve(gEmails)
}

function deleteEmail(emailId) {
    const emailIdx = gEmails.findIndex(function(email) {
        return emailId === email.id
    });
    gEmails.splice(emailIdx, 1);
    storageService.saveToStorage(KEY, gEmails);
    return Promise.resolve(); // is this still needed?
}

function getEmailById(emailId) {
    const email = gEmails.find(function(email) {
        return emailId === email.id
    })
    return Promise.resolve(email);
}

function _composeMail(recipient, subject, body) {
    const newMail = {
        id: utilService.makeId(),
        recipient,
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
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