function generateInvitations(guests, ...additionalDetails) {
    return guests.map(guest => {
        let invitationMessage = `Dear ${guest.name},\n`;
        invitationMessage += `You are cordially invited to our party!`;


        if (additionalDetails.length > 0) {
            invitationMessage += `\n${additionalDetails.join('\n')}`;
        }

        invitationMessage += `\nPlease RSVP by [RSVP Deadline].\n`;
        invitationMessage += `We hope to see you there!\n`;
        invitationMessage += `Best regards,\nThe Party Organizer`;

        return invitationMessage;
    });
}

const guests = [
    { name: "Alice", age: 30, rsvpStatus: "Yes" },
    { name: "Bob", age: 35, rsvpStatus: "No" },
    { name: "Charlie", age: 28, rsvpStatus: "Maybe" }
];

const invitations = generateInvitations(guests, "Party Date: May 15th, 2024", "Location: 123 Main St.");
console.log(invitations);
