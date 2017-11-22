package fr.cpe.ejb;

import javax.annotation.Resource;
import javax.ejb.LocalBean; 
import javax.ejb.Stateless; 
import javax.inject.Inject; 
import javax.jms.JMSContext;
import javax.jms.Queue;
import fr.cpe.model.User;
 
@Stateless
@LocalBean
public class MessageSenderQueue implements MessageSenderQueueLocal {
	@Inject
	JMSContext context;
	
	@Resource(mappedName = "java:/jms/queue/watcherqueue") 
	private Queue queue;
	 
	@Override
	public void sendMessage(String message) {
	 
		context.createProducer().send(queue, message);
	 
	}
	
	@Override
	public void sendMessage(User user) {
	 
		context.createProducer().send(queue, user);
	 
	}
	

	
	
}
