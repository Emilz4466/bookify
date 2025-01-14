package pl.com.bookify.server.commons.persistence;

import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import pl.com.bookify.server.commons.stereotypes.Repository;

import java.io.Serializable;

public class RepositoryImpl<T, I extends Serializable> extends SimpleJpaRepository<T, I> implements Repository<T, I> {

    private EntityManager em;

    public RepositoryImpl(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.em = entityManager;
    }


}