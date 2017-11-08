package fr.cpe.services;

import javax.ejb.Stateless;

@Stateless
public class Hello implements IHello{

	public String sayHello() {
		return "Hello world";
	}
}
