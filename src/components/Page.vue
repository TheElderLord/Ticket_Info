<script>
import html2pdf from 'html2pdf.js';
import moment from 'moment';
import 'moment/locale/ru';


export default {
  data() {
    return {
    
      time: null

    }
  },
  //?number=#ticket#&time=#reg_time#&waittime=#wait_time#&order=#order#
  mounted() {

    this.formattedDate();

  },
  computed: {

  },
  methods: {
    downloadAsPDF() {
      const element = document.getElementById('pdf'); // Replace 'pdf-content' with the ID of the element containing the content you want to download as PDF

      const options = {
        filename: 'ticket.pdf',
        jsPDF: {
          format: 'a5',
          orientation: 'portrait',

        },
      };

      html2pdf().set(options).from(element).save();
    },
    formattedDate() {
      moment.locale('ru');
      const dateString = this.$route.query.time;
      const date = moment(dateString, "ddd MMM DD HH:mm:ss z YYYY").locale('ru');
   
      this.time = date.format('HH:mm:ss');

    },

  },


}
</script>
<template>
  <main>
    <div class="container">
      <div>
        <div class="inner" id="pdf">
          <div class="header">
            <div class="logo">
              <img src="../assets/images/mainLogo-removebg-preview.png" alt="">
            </div>
            <div class="text">
              <div>
                <h3>{{ time }}</h3>
              </div>
            </div>
          </div>
          <div class="ticket_num">
            <h1>{{ $route.query.number }}</h1>
          </div>
          <div class="order_num">
            <h2>Код для оценки качества: {{ $route.query.order }}</h2>
          </div>
          <div class="wait_time">
            <h4>Среднее время ожидания: {{ $route.query.waittime }} минут.</h4>
          </div>



        </div>
        <div class="but">
          <button @click="downloadAsPDF">Скачать</button>
        </div>
      </div>
    </div>

  </main>
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-color: rgb(255, 255, 255);
  margin: 0;
}

.container {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inner {
  width: 100vw;
  text-align: center;

}

.text {
  padding: 1.7rem;
  display: flex;
  align-items: center;

}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.header .logo img {
  width: 35vw;
}


.ticket_num {
  text-align: center;
}

.ticket_num h1 {
  font-size: 100px;
}

.but {
  margin-top: 5rem;
  /* Параметры тени */


}

.but button {
  width: 40vw;
  height: 5vh;
  border: none;
  border-radius: 2rem;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-size: 5vw;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>