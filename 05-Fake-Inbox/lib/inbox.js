const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  return Math.random() < 0.2;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const sender = ["Dog1", "Dog2", "Dog3"]
  const randomSender = sender[Math.floor(Math.random() * sender.length)];

  const subject = ["I miss you!", "Come home ASAP", "I'm hungry"]
  const randomSubject = subject[Math.floor(Math.random() * subject.length)];
  const newEmail = {
    "senders": randomSender,
    "subjects": randomSubject
  }
  return newEmail
};
const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  let newMessage = `
    <div class="row message unread">
      <div class="col-3">${message.senders}</div>
      <div class="col-9">${message.subjects}</div>
    </div>
    `
  const inbox = document.querySelector ("#inbox")
  inbox.insertAdjacentHTML("beforebegin", newMessage)
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    var message = newMessage()
    appendMessageToDom(message)

const unread = document.querySelectorAll(".unread");
    const count = document.querySelector("#count");
    count.innerText = `(${unread.length})`;
}
};














// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

