self.addEventListener("push", event => {
  let data = {};

  try {
    data = event.data.json();
  } catch (e) {
    data = { title: "Test", body: "Hello Push!" };
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "icon.png"
    })
  );
});
