<script>
  import Contacts from "$lib/components/contacts.svelte";
  import Description from "$lib/components/description.svelte";
  import Mail from "$lib/components/mail.svelte";
  import Title from "$lib/components/title.svelte";
  import MailIcon from "$lib/svgs/mail_icon.svelte";
  import Map from "$lib/svgs/map.svelte";
  import Phone from "$lib/svgs/phone.svelte";
 

  let {title ,description} = $props();

</script>

<div class="parent" id="contact">
  <div class="title">
    <Title title={title} />
    <Description description={description} />
  </div>
  <div class="layout">
    <div class="email"><Mail /></div>
    <div class="contact">
        <Contacts icon={Map} label1='Country' value1='Afghanistan' label2='City' value2='Kunduz' label3='Street' value3='Kunduz-Khanabad str Chelamazar' />
        <Contacts icon={MailIcon} label1='Email' value1='aalimmuradia4@gmail.com' label2='Skype' value2='@aalimkhan' label3='Telegram' value3='@aalimkhanmuradi' />
        <Contacts icon={Phone} label1='WhatsApp' value1='(+93) 730 874 961' label2='Personal' value2='(+93) 730 874 961' label3='' value3='' />
    </div>
  </div>
</div>
<style>
  .parent {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 48px;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    width: 438px;
    text-align: center;
    gap: 16px;
  }
  .layout{
    width: 1020px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  .email{
    display: flex;
    width: 68%;
  }
  .contact{
    display: flex;
    width: 32%;
    flex-direction: column;
    gap: 24px;
  }
</style>