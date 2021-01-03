abstract class AbstractPerson {
  abstract greeting(): void;
}

class PersonImplementation extends AbstractPerson {
  greeting() {
    console.info('hi, this is a implementation of abstract greeting')
  }
}