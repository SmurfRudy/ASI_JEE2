package fr.cpe.services;

import javax.ejb.Local;

@Local
public interface IHello {

	String sayHello();
}
