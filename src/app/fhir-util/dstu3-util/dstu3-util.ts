export class Dstu3Util  {

  constructor() { }

  static cleanString( str: string ): string {
    return ( str==null ? "-": str );
  }
}
