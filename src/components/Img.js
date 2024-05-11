import React from "react";

//Создание компонента внутри файла JS через класс
class Img extends React.Component {
  constructor(props) {
    super(props); //строка по умолчанию, отвечает за возможную передачу свойств от родительсеого обьекта
    this.state = {
      parag: "This image",
      userData: "",
    };

    this.imageClick = this.imageClick.bind(this); // метод .bind отвечает за визуализацию изменения состояния на странице пользователя
  }

  componentDidUpdate(prevProp) {
    if (this.state.parag !== "This image") {
      alert("This image");
    }
  }

  nameAlt = "notfing"; // внутри класса можно прописывать переменные и методы для данного класса
  render() {
    return (
      <div className="imgDiv">
        <p>{this.state.parag}</p>
        <img
          className="img"
          src={this.props.src}
          alt={this.nameAlt}
          onClick={this.imageClick}
          onMouseEnter={this.imageMouseEn}
        />
        <p>{this.state.userData}</p>
        <input
          placeholder="Help text"
          onChange={(event) => this.setState({ userData: event.target.value })}
        ></input>
      </div>
    );
  }
  imageClick() {
    this.setState({ parag: "This any image" }); // метод setState отвечает за изменение состояния, но используется только вместе с 11 сторчкой кода^,однако
    // это используется только для сомостоятельно создвнных методов,тех, что находятся вне функции render (), например 24 строчка кода^, находясь внутри не требует отдельного подключения методом .bind
    console.log("Click image");
  } // внутри класса можно прописывать переменные и методы для данного класса
  imageMouseEn() {
    console.log("Mouse over image");
  }
}

export default Img;
