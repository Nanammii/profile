const ProfileView = {
  render: () => {
    return (
      `<section class="d-flex flex-column bg-white pb-3">
    <div class="d-flex flex-column justify-content-between padding-inline py-3 fs-6">
      <h2>My skills</h2>
    </div>
      <ul class="d-flex flex-column w-100 gap-3 pb-3 padding-inline">
        <li>HTML</li>
        <li>CSS</li>
        <li>Figma</li>
        <li>Photoshop</li>
      </ul>
  </section>`
    );
  }
}

export default ProfileView;
