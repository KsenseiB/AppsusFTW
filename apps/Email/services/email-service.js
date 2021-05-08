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
var gEmails = loadStorage ? loadStorage : [{
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
    },
    {
        id: '4',
        sender: 'tony@starkind.com',
        subject: 'Hulk advertising opportunity?',
        body: 'Should we consider using the Hulk to advertise for Stark industries? He\'s basically a giant banner.',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    },
    {
        id: '5',
        sender: ' thor@theworthy.com',
        subject: 'Shower thoughts',
        body: 'Pick up!',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    },
    {
        id: '6',
        sender: 'Elon Musk',
        subject: 'why you ghosting?',
        body: 'Pick up!',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    },
    {
        id: '7',
        sender: 'peter@daddyissues.com',
        subject: 'Summer time',
        body: ' I\'m not ready for the summer but I\'m sure Tan-os is.',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    },
    {
        id: '8',
        sender: 'gandalf@thegrey.com',
        subject: ' keep studying',
        body: 'If you keep watching the Lord of the Rings movies, you shall not pass your exams.',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    }, {
        id: '9',
        sender: 'greengoblin@pumpkinbombs.com',
        subject: 'spiderman?',
        body: 'Uncle Ben would never discourage Peter Parker from joining the Avengers. But his Aunt May.',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    }, {
        id: '10',
        sender: 'andy@aussieland.com',
        subject: 'Australia is awesome',
        body: 'Home of the Macropodidae, Phascolarctos cinereus and the Thylarctos plummetus. (you should google the last one)',
        isRead: false,
        sentAt: new Date().toLocaleDateString()

    }, {
        id: '11',
        sender: 'nickfury@shield.gov',
        subject: 'I bet the Avengers would be great with tools',
        body: 'They are always assembling.',
        isRead: false,
        sentAt: new Date().toLocaleDateString()
    }
];

function query() {
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    const email = gEmails.find(function(email) {
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
    const emailIdx = gEmails.findIndex(function(email) {
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