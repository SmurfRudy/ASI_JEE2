package impl;

import javax.inject.Inject;

import fr.cpe.rest.IHelloAsyncRestService;
import fr.cpe.rest.IHelloRestService;

public class HelloAsyncRestService implements IHelloAsyncRestService{
	
	@Inject
	private IHelloAsyncRestService helloAsyncRestService;
	
	@Inject
	private IHelloRestService helloRestService;
	
	public String hello() {
		return null;
		
	}

}
