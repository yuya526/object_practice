/**
 * 課題: 以下の条件を満たすオブジェクトを作る
 *   - 変数名はmyArrayで値はオブジェクトする
 *   - オブジェクトmyArrayは次のプロパティと値を持つ
 *     - arrayプロパティ: 初期値として[1, 2, 3]がセットされた配列
 *     - forEachプロパティ : 「Array.prototype.forEach()」と同じ機能を持つメソッド
 *       - forEachメソッド内では「Array.prototype.forEach()」を使わずfor文でループを行うこと
 *       - forEachメソッドは引数にコールバック関数を受け取る
 *         - コールバック関数の引数名は「callback」とする
 *         - コールバック関数は2つの引数を持つ
 *           - 第1引数は配列の各要素
 *           - 第2引数は配列の各要素に対応するインデックス番号
 *     - mapプロパティ : 「Array.prototype.map()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 *     - filterプロパティ : 「Array.prototype.filter()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 */


// ここでmyArray.forEachを実行して、console.logを使って各値とインデックスを出力する
const myArray = {
  array : [1, 2, 3],
  forEach : functon(callback) {
    for (let i = 0; this.array.length > i; i++){
      callback( this.array[i], i);
    }
  },
    map : function (callback) {
    const returnedValues = [];
    this.forEach( (value,index) => {
      returnedValues.push(callback(value,index));
    });

    return returnedValues;
  },
    filter : function (callback) {
    const returnedValues = [];
    this.forEach( (value,index) => {
      if (callback(value,index)){
        returnedValues.push(value);
      }
    });

    return returnedValues;
  }
};


// ここでmyArray.mapを実行したあと、mapの戻り値とmyArray.arrayをconsole.logで出力する
// mapメソッドで取得する値は、myArray.arrayの各要素をindex倍した値とする。(value * index)
myArray.forEach((value,index) => {
  console.log('myArray.forEach :',value,index);
});

//ここでfilterを実行したあと、filterの戻り値とmyArray.arrayをconsole.logで出力する
// filterメソッドで取得する値は、myArray.arrayの奇数だけとする
