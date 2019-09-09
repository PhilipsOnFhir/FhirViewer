export class StringUtil  {

  constructor() { }

  static cleanString( str: string ): string {
    return ( str==null ? "-": str );
  }
}
