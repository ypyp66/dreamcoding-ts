{
  /**
   * Type Assertions (타입 강제)
   */

  function jsStrFunc(): any {
    //return "hello";
    return 2;
  }

  const result = jsStrFunc();
  console.log((result as string).length);
}
