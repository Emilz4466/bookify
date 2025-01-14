package pl.com.bookify.server.commons.mapper;

import org.mapstruct.MappingTarget;
import pl.com.bookify.server.commons.stereotypes.AbstractEntity;

public interface BaseRequestMapper<E extends AbstractEntity, R> {

    E toEntity(R request);

    void updateEntityFromRequest(R request, @MappingTarget E entity);

}
