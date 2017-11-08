package fr.cpe.services;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.Queue;

@Stateless
public class HelloAsync implements IHelloAsync {

	@Resource(name="java:/asi2")
	private Queue queue;
	
	@Inject
	private JMSContext context;
	
	public void hello() {
		context.createProducer().send(queue, "Hello world!");
	}
}
