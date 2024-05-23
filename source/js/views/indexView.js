const IndexView = {
  render: function () {
    return (
    `<div class="main-container d-flex flex-column flex-lg-row gap-custom row">
    <div class="d-flex flex-column gap-custom p-0 col-lg-8 col-xxl-9">
      <section class="post bg-white">
        <div class="d-flex justify-content-between align-items-center padding-inline py-3 fs-6">
          <span>Sunshine</span>
          <span class="post__time">
            <span>49 minutes ago</span>
            <button class="btn p-0 border-0">
              <img src="./img/icons/arrow-down.svg" alt="Open post" width="24" height="24"/>
            </button>
          </span>
        </div>
        <div class="post__wrapper d-flex flex-column padding-inline pb-3">
          <img class="post__image object-fit-cover w-100" src="./img/post-image-01.jpeg" alt="Post image" width="2880" height="1800">
          <div class="post__title position-relative pt-3 pb-3">
            <span class="d-block py-1"><span class="text-primary">Jason Anderson</span> commented:</span>
          </div>
          <div class="post__comment position-relative d-flex flex-column mb-3">
            <p>Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your
              heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion,
              memories, light breeze, the sun that appears on the skin and caresses the face. </p>
            <span class="text-secondary">– Jason, 10:30 am</span>
          </div>
          <div class="d-flex pb-3 gap-custom fs-6">
            <span class="post__icon position-relative">432</span>
            <span class="post__icon post__icon--comment position-relative">47</span>
          </div>
        </div>
      </section>

      <section class="bg-white d-flex justify-content-between  padding-inline py-3 fs-6">
        <span>Sunset Sunset Sunset</span>
        <span class="post__time">
          <span>53 minutes ago</span>
          <button class="btn p-0 border-0">
            <img src="./img/icons/arrow-down.svg" alt="Open post" width="24" height="24"/>
          </button>
        </span>
      </section>

      <section class="bg-white d-flex justify-content-between padding-inline py-3 fs-6">
        <span>Morning of Siberia</span>
        <span class="position-relative">
          <span>56 minutes ago</span>
          <button class="btn p-0 border-0">
            <img src="./img/icons/arrow-down.svg" alt="Open post" width="24" height="24"/>
          </button>
        </span>

      </section>
    </div>

    <aside class="d-flex flex-column aside-width gap-custom p-0 col-lg-3 col-xxl-2">
      <section class="d-flex flex-column align-items-center text-center bg-white p-4">
        <img class="profile__image object-fit-cover rounded-circle mb-3" src="img/avatar-hanna.jpeg" alt="Avatar User"
             width="2048"
             height="2560"/>
        <span class="mb-2 fs-7">Hanna Dorman</span>
        <span class="mb-3 text-secondary">UX/UI designer</span>
        <ul class="d-flex gap-2">
          <li>
            <img src="./img/icons/telegram-icon.svg" alt="Telegram" width="20" height="20"/>
          </li>
          <li>
            <img src="./img/icons/hh-icon.svg" alt="HH"/>
          </li>
          <li>
            <img src="./img/icons/twitter-icon.svg" alt="Twitter"/>
          </li>
        </ul>
      </section>
      <nav class="d-flex flex-column align-items-center bg-white">
        <div class="aside__wrapper w-100 d-flex justify-content-between align-items-center fw-medium mb-3">
          <span>Navigation</span>
          <button class="btn p-0 border-0">
            <img class="d-block" src="./img/icons/arrow-up.svg" alt="Toggle" width="20" height="20"/>
          </button>
        </div>
        <ul class="aside__list d-flex flex-column w-100 gap-3 pb-3">
          <li>
            <a class="aside__link" href="#profile">My profile</a>
          </li>
          <li>
            <a class="aside__link aside__link--balance d-flex justify-content-between">
              <span>Balance</span>
              <span>$ 1,430</span>
            </a>
          </li>
          <li>
            <a class="aside__link aside__link--connections d-flex justify-content-between">
              <span>Connections</span>
              <span>29</span>
            </a>
          </li>
          <li><a class="aside__link aside__link--friends">Friends</a></li>
        </ul>
        <ul class="d-flex flex-column w-100 gap-3 pt-3 pb-3">
          <li>
            <a class="aside__link aside__link--events d-flex justify-content-between">
              <span>Events</span>
              <span>45</span>
            </a>
          </li>
          <li><a class="aside__link aside__link--settings">Account settings</a></li>
        </ul>
      </nav>

      <section class="d-flex flex-column align-items-center text-center bg-white">
        <div class="aside__wrapper w-100 d-flex justify-content-between align-items-center fw-medium mb-2">
          <span>Share your thoughts</span>
          <button class="btn p-0 border-0">
            <img class="d-block" src="./img/icons/arrow-up.svg" alt="Toggle" width="20" height="20"/>
          </button>
        </div>
        <form class="w-100 pe-3 ps-3 pb-3">
          <div class="mb-2">
            <textarea class="form-control bg-white text-secondary" name="thought" placeholder="Enter your message..."></textarea>
          </div>
          <button class="btn btn-primary w-100" type="submit">Save</button>
        </form>
      </section>
    </aside>
  </div>`
    )
  }
}

export default IndexView;
