package impl;

import javax.inject.Inject;

import fr.cpe.rest.IHelloRestService;
import fr.cpe.services.IHello;

public class HelloRestService implements IHelloRestService {
	
	@Inject
	private IHello hello;
	
	public String hello() {
		return hello.sayHello();
	}

}
