<script>
  import { copy } from "../../store/clipboard.js";

  const name = "CONTACT_NAME";
  const phone = "CONTACT_PHONE_NUMBER";
  const email = "CONTACT_EMAIL";
</script>

<div class="card">
  <h2 class="contact-name">{name}</h2>
  <div class="contact-info">
    <a href="sms:{phone}" class="contact-link" id="contact-phone">{phone}</a>
    <button class="clipboard" on:click={() => copy(phone)}>
      <i class="far fa-clipboard" />
    </button>
  </div>
  <div class="contact-info">
    <a href="mailto:{email}" class="contact-link">{email}</a>
    <button class="clipboard" on:click={() => copy(email)}>
      <i class="far fa-clipboard" />
    </button>
  </div>
</div>
