package pl.com.bookify.server.commons.mapper;
import pl.com.bookify.server.commons.stereotypes.AbstractEntity;

import java.util.List;

public interface GenericResponseMapper<E extends AbstractEntity, R> {

    R toResponse(E entity);

    List<R> toResponseList(List<E> entities);

}