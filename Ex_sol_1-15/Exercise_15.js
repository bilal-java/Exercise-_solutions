"use strict";
/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting
• Print a second set of invitation messages, one for each person who is still
// in your list.*/
let guestList = ["Zia khan", "Muhammad Kamran", "Amina", "Ali Bukhari"];
console.log(guestList);
//1.print name of guest who can't make it 
let guest_Notcoming = "Ali Bukhari";
console.log(`${guest_Notcoming} can't make it to the dinner `);
// 2-Replace the name of guest who can't make it
let index_guest_Notcoming = guestList.indexOf(guest_Notcoming);
console.log(index_guest_Notcoming);
let new_guest = "Abid Ali";
if (index_guest_Notcoming !== -1) {
    guestList[index_guest_Notcoming] = new_guest;
}
console.log((guestList));
// 3-Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach((guest) => {
    console.log(`Dear ${guest},you are invited to dinner tonight`);
});
