<template>
  <div id="about" class="container">
    <div class="about-row">
      <div class="left-col">
        <img src="pexels-karolina-grabowska-5427135.jpg" alt="">
      </div>
      <div class="right-col">
        <h1>Наша <span>історія</span></h1>
        <p>Ласкаво просимо до магазину Serenity Books, де кожна сторінка наповнена чарами та пригодами!
          Наша історія почалася з великої любові до літератури та бажання дарувати читачам радість та незабутні емоції.
          З моменту нашого заснування, ми віддані меті подарувати світ казки та навчання через захоплюючі книги.</p>
      </div>
    </div>

    <div class="about-row">
      <div class="left-col">
        <h1>Реалізація <span>мрії</span></h1>
        <p>Наш інтернет-магазин - це втілення мрії про те, щоб кожна людина мала доступ до чудових історій та навчальних матеріалів.
          Ми віримо в силу слова та вплив читання на розвиток уяви, творчості та важливих навичок.
          Тут кожен зможе знайти книжку, яка відкриє новий світ для кожного читача.</p>
      </div>
      <div class="right-col">
        <img src="pexels-ron-lach-8085264.jpg" alt="">
      </div>
    </div>

    <div class="about-row">
      <div class="left-col">
        <img src="pexels-thought-catalog-904616.jpg" alt="">
      </div>
      <div class="right-col">
        <h1>Перші <span>кроки</span></h1>
        <p>Наші перші кроки були невеликими, але наповненими ентузіазмом та любов'ю до книг.
          З моменту відкриття магазину, ми працюємо над тим, щоб кожен відвідувач знайшов у нас не лише книгу, але й особливий момент для себе.
          Ми вдячні за підтримку наших клієнтів та обіцяємо продовжувати творити чарівництво кожен день.</p>
      </div>
    </div>
  </div>
</template>

<style>
#about {
  min-height: 100vh;
  padding: 30px;
  border: none;
  max-width: 1920px;
}

.about-info h1{
  font-weight: bold;
}

.about-info p{
  padding: 15px;
  font-size: 24px;
  color: rgb(240, 138, 92);
}

.about-row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.left-col{
  flex-basis: 50%;
}

.left-col img{
  width: 100%;
  padding: 20px;
}

.right-col{
  flex-basis: 48%;
  margin-left: 2%;
}

.right-col h1, .left-col h1{
  padding: 20px;
  font-weight: bold;
  font-size: 35px;
}

.right-col p, .left-col p{
  padding: 20px;
  font-size: 20px;
  text-align: justify;
}

.right-col span, .left-col span{
  color: rgb(240, 138, 92);
}

@media only screen and (max-width: 500px){
  .left-col{
    flex-basis: 100%;
  }

  .left-col img{
    width: 100%;
  }

  .right-col{
    flex-basis: 100%;
  }
}
</style>
