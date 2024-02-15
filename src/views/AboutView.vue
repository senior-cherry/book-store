<template>
  <div id="about" class="container">
    <div class="about-row">
      <div class="left-col">
        <img src="last-wish.jpg" alt="">
      </div>
      <div class="right-col">
        <h1>Наша <span>історія</span></h1>
        <p>Історія нашого магазину почалась нещодавно, хоча насправді це відбулось дуже давно.
          Декілька друзів серйозно займалися спортом і розуміли наскільки це для них важливо. Вони розуміли, що
          необхідно мати зручний і комфортний одяг для тренувань та змагань, тому мріяли відкрити власний магазин спортивного одягу.
          Як і всі підлітки, вони слідкували за спортивними подіями, життям і підготовкою найкращих атлетів. </p>
      </div>
    </div>

    <div class="about-row">
      <div class="left-col">
        <h1>Реалізація <span>мрії</span></h1>
        <p>Спочатку друзі хотіли відійти від своєї мрії. Проте бажання поширювати професійний і аматорський спорт їх не покинуло.
          Вони не змогли змінити себе, тому вирішили остаточно реалізувати свою мрію. Це було актуально, тому що
          представники різних видів спорту стикались із проблемою нестачі спеціального одягу, який був би однаково зручний у різних умовах.
          Друзі взяли в аренду невеличке приміщення, створили інтернет-магазин, налагодили систему обслуговування клієнтів.</p>
      </div>
      <div class="right-col">
        <img src="harry-potter-2007.jpg" alt="">
      </div>
    </div>

    <div class="about-row">
      <div class="left-col">
        <img src="harry-potter-2009.jpg" alt="">
      </div>
      <div class="right-col">
        <h1>Перші <span>кроки</span></h1>
        <p>Після створення магазину, наша команда почала збільшуватись, і все це завдяки дружбі та вірі в спільну мету. Ми
          є професіоналами своєї справи, адже проходимо курси та семінари, для того щоб ставати кращими.
          Кожен з нас вірить у себе, і готовий до саморозвитку та росту. На нашому сайті представлені товари, які є у нашому магазині.
          Для нас тепер немає кордонів, всі найкращі товари у <b>Motion Spirit</b>. Ми розширюємо свій асортимент, для того,
          щоб ви могли здійснити свою мрію та знайти свій улюблений бренд.</p>
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
